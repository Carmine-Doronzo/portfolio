import { Octokit } from 'octokit';
import { reactive } from "vue";

export const store = reactive({

  octokit: new Octokit({ auth: import.meta.env.VITE_API_KEY }),
  data: {

    lastPage: null,
    projects: [],
    info: null,
    async fetchData(per_page, page) {
      this.projects = []
      const { data } = await store.octokit.rest.users.getAuthenticated();
      console.log('Hello, ' + data.login);

      await store.octokit.request(`GET /user/repos?page=${page}&per_page=${per_page}`, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }).then((res) => {
        this.projects = res.data

        console.log(this.projects)
      })

      await store.octokit.request(`GET /user/repos?page=1&per_page=1000`, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }).then((res) => {

        this.lastPage = Math.ceil(res.data.length / 15)
        console.log(this.projects)
      })
    },

    async getSingleProjetct(i) {

      return await store.octokit.request('GET /repos/{owner}/{repo}', {
        owner: this.projects[i].full_name.split('/')[0],
        repo: this.projects[i].name,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }

      })
        .then((res) => {

          this.info = res.data

        });
    }
  },
})


