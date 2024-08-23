import { Octokit } from 'octokit';
import { reactive } from "vue";

export const store = reactive({

  octokit: new Octokit({ auth: import.meta.env.VITE_API_KEY }),
  data: {

    //lastPage: null,
    projects: [],
    projectsToView: [],
    projectsNone: [],
    info: null,
    async fetchData() {
      this.projects = []
      const { data } = await store.octokit.rest.users.getAuthenticated();
      console.log('Hello, ' + data.login);

      await store.octokit.request(`GET /user/repos?per_page=1000`, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }).then((res) => {
        this.projects = res.data

        store.status(this.projects, this.projectsToView, this.projectsNone)

        this.projects.forEach(project => {
          store.octokit.request(`GET /repos/{owner}/{repo}/contents/${project.name}.png`, {
            owner: project.full_name.split('/')[0],
            repo: project.name,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28',
              'accept': 'application/vnd.github+json'
            }

          })
            .then((res) => {

              project['image'] = res.data.download_url

            });

        });


      })
    },

    async getSingleProjetct(id) {

      await store.octokit.request(`GET /repositories/${id}`, {

        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }

      }).then((res) => {

        this.info = res.data

        store.octokit.request(`GET /repositories/${id}/languages`, {

          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }

        }).then((res) => {
          //console.log(res.data)
          let obj = Object.keys(res.data)
          this.info['only_languages'] = obj

        })

      });

    }
  },

  status(projects, arrayGood, arrayBad) {

    projects.forEach(project => {
      store.octokit.request(`GET /repos/{owner}/{repo}/contents/status`, {
        owner: project.full_name.split('/')[0],
        repo: project.name,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          'accept': 'application/vnd.github+json'
        }

      })
        .then((res) => {


          switch (atob(res.data.content)) {
            case 'finish':
              project['status'] = atob(res.data.content)
              arrayGood.push(project)

              break;

            case 'work in progress':
              project['status'] = atob(res.data.content)
              arrayGood.push(project)
              break;

            case 'none':
              project['status'] = atob(res.data.content)
              arrayBad.push(project)
              break;
          }

        });

    });

  }

})


