import { Octokit } from 'octokit';
import { reactive } from "vue";

export const store = reactive({

  octokit: new Octokit({ auth: import.meta.env.VITE_API_KEY }),
  data: {

    lastPage: null,
    projects: [],
    projectsToView: [],
    projectNone: [],
    info: null,
    async fetchData() {
      this.projects = []
      const { data } = await store.octokit.rest.users.getAuthenticated();
      console.log('Hello, ' + data.login);

      // await store.octokit.request(`GET /user/repos?page=${page}&per_page=${per_page}`, {
      //   headers: {
      //     'X-GitHub-Api-Version': '2022-11-28'
      //   }
      // }).then((res) => {
      //   this.projects = res.data

      // })

        // this.projects.forEach(project => {
        //   store.octokit.request(`GET /repos/{owner}/{repo}/contents/${project.name}.png`, {
        //     owner: project.full_name.split('/')[0],
        //     repo: project.name,
        //     headers: {
        //       'X-GitHub-Api-Version': '2022-11-28',
        //       'accept': 'application/vnd.github+json'
        //     }

        //   })
        //     .then((res) => {

        //       //console.log(typeof(atob(res.data.content)))
        //       project['image'] = res.data.download_url

        //     });

        // });

        // this.projects.forEach(project => {
        //   store.octokit.request(`GET /repos/{owner}/{repo}/contents/status`, {
        //     owner: project.full_name.split('/')[0],
        //     repo: project.name,
        //     headers: {
        //       'X-GitHub-Api-Version': '2022-11-28',
        //       'accept': 'application/vnd.github+json'
        //     }

        //   })
        //     .then((res) => {

        //       console.log(atob(res.data.content))
        //       //project['image']= res.data.download_url 

        //     });

        // });
        //store.status(this.projects, this.projectsToView, this.projectNone)


      

      await store.octokit.request(`GET /user/repos?per_page=1000`, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }).then((res) => {
        this.projects = res.data
        
        store.status(this.projects, this.projectsToView, this.projectNone)
        
        this.projectsToView.forEach(project => {
          store.octokit.request(`GET /repos/{owner}/{repo}/contents/${project.name}.png`, {
            owner: project.full_name.split('/')[0],
            repo: project.name,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28',
              'accept': 'application/vnd.github+json'
            }

          })
            .then((res) => {

              //console.log(typeof(atob(res.data.content)))
              project['image'] = res.data.download_url

            });

        });

        this.lastPage = Math.ceil(this.projectsToView.length / 15)
        //console.log(this.projects)
      })
    },

    async getSingleProjetct(i) {

      return await store.octokit.request('GET /repos/{owner}/{repo}', {
        owner: this.projectsToView[i].full_name.split('/')[0],
        repo: this.projectsToView[i].name,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }

      })
        .then((res) => {

          this.info = res.data



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
            case 'finish' || 'work in progress':
              arrayGood.push(project)
              break;

            case 'work in progress':
              arrayGood.push(project)
              break;

            case 'none':
              arrayBad.push(project)
              break;
          }

        });

    });

  }

})


