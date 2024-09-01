// import { Octokit } from 'octokit';
// import { reactive } from "vue";
// import { marked, Marked } from 'marked';

// export const store = reactive({

//   octokit: new Octokit({ auth: import.meta.env.VITE_API_KEY }),
//   data: {

//     //lastPage: null,
//     projects: [],
//     projectsToView: [],
//     projectsNone: [],
//     info: null,
//     async fetchData() {
//       this.projects = []
//       const { data } = await store.octokit.rest.users.getAuthenticated();
//       console.log('Hello, ' + data.login);

//       await store.octokit.request(`GET /user/repos?per_page=1000`, {
//         headers: {
//           'X-GitHub-Api-Version': '2022-11-28'
//         }
//       }).then((res) => {
//         this.projects = res.data

//         store.status(this.projects, this.projectsToView, this.projectsNone)

//         this.projects.forEach(project => {
//           store.octokit.request(`GET /repos/{owner}/{repo}/contents/${project.name}-0.png`, {
//             owner: project.full_name.split('/')[0],
//             repo: project.name,
//             headers: {
//               'X-GitHub-Api-Version': '2022-11-28',
//               'accept': 'application/vnd.github+json'
//             }

//           })
//             .then((res) => {

//               project['image'] = res.data.download_url

//             });

//         });


//       })
//     },

//     async getSingleProjetct(id) {

//       await store.octokit.request(`GET /repositories/${id}`, {

//         headers: {
//           'X-GitHub-Api-Version': '2022-11-28'
//         }

//       }).then((res) => {

//         this.info = res.data

//         store.octokit.request(`GET /repositories/${id}/contents/README.md`, {

//           headers: {
//             'X-GitHub-Api-Version': '2022-11-28',
//             'accept': 'application/vnd.github+json'
//           }

//         })
//           .then((res) => {

//             //console.log(res.data)
//             this.info['readme_description'] = marked(decodeURIComponent(escape(atob(res.data.content))))
//           })

//           this.info['image'] = []

//           for(let i = 0; i<3; i++){

//             store.octokit.request(`GET /repositories/${id}/contents/${this.info.name}-${i}.png`, {

//               headers: {
//                 'X-GitHub-Api-Version': '2022-11-28',
//                 'accept': 'application/vnd.github+json'
//               }

//             })
//               .then((res) => {

//                 //console.log(res.data)
//                 this.info[`image`].push(res.data.download_url) 
//               })

//           }


//         store.octokit.request(`GET /repositories/${id}/languages`, {

//           headers: {
//             'X-GitHub-Api-Version': '2022-11-28'
//           }

//         }).then((res) => {
//           //console.log(res.data)
//           let obj = Object.keys(res.data)
//           this.info['only_languages'] = obj

//         })

//         store.octokit.request(`GET /repositories/${id}/contributors`, {

//           headers: {
//             'X-GitHub-Api-Version': '2022-11-28'
//           }

//         }).then((res) => {
//           //console.log(res.data)
//           //let obj = Object.keys(res.data)
//           this.info['contributors'] = res.data 

//         })

//       });

//     }
//   },

//   status(projects, arrayGood, arrayBad) {

//     projects.forEach(project => {
//       store.octokit.request(`GET /repos/{owner}/{repo}/contents/status`, {
//         owner: project.full_name.split('/')[0],
//         repo: project.name,
//         headers: {
//           'X-GitHub-Api-Version': '2022-11-28',
//           'accept': 'application/vnd.github+json'
//         }

//       })
//         .then((res) => {


//           switch (atob(res.data.content)) {
//             case 'finish':
//               project['status'] = atob(res.data.content)
//               arrayGood.push(project)

//               break;

//             case 'work in progress':
//               project['status'] = atob(res.data.content)
//               arrayGood.push(project)
//               break;

//             case 'none':
//               project['status'] = atob(res.data.content)
//               arrayBad.push(project)
//               break;
//           }

//         });

//     });

//   },

//   // format_accenti(string) {
//   //   const search = ['ì', 'è', 'é', 'ò', 'à', 'ù', '‘', '’', '“', '”', ' '];
//   //   const replace1 = ['ì', 'è', 'é', 'ò', 'à', 'ù', "'", "'", '"', '"', ' '];
//   //   let newString = string.replace(search, replace1);
//   //   return newString
//   // }

// })
import { Octokit } from 'octokit';
import { reactive } from "vue";
import { marked } from 'marked';

export const store = reactive({
  octokit: new Octokit({ auth: import.meta.env.VITE_API_KEY }),
  data: {
    projects: [],
    projectsToView: [],
    projectsNone: [],
    info: null,

    /*async/await è una sintassi che permette di scrivere codice asincrono in modo più leggibile e simile
 al codice sincrono. async viene utilizzato per dichiarare una funzione asincrona,
  mentre await viene utilizzato per aspettare che una promessa venga risolta.
  Migliora la leggibilità del codice rispetto all’uso di .then() e .catch(), 
  rendendo più chiaro il flusso delle operazioni asincrone. */

    async fetchData() {
      this.projects = [];
      const { data } = await store.octokit.rest.users.getAuthenticated();
      console.log('Hello, ' + data.login);

      const res = await store.octokit.request('GET /user/repos?per_page=1000', {
        headers: { 'X-GitHub-Api-Version': '2022-11-28' }
      });
      this.projects = res.data;

      store.status(this.projects, this.projectsToView, this.projectsNone);

      const projectRequests = this.projects.map(async (project) => {
        try {
          const res = await store.octokit.request(`GET /repos/{owner}/{repo}/contents/${project.name}-0.png`, {
            owner: project.full_name.split('/')[0],
            repo: project.name,
            headers: {
              'X-GitHub-Api-Version': '2022-11-28',
              'accept': 'application/vnd.github+json'
            }
          });
          project['image'] = res.data.download_url;
        } catch (error) {
          console.error(`Error fetching image for project ${project.name}:`, error);
        }
      });

      await Promise.all(projectRequests);
    },

    /** Promise.all è un metodo che accetta un array di promesse e ritorna una singola promessa che si risolve
     *  quando tutte le promesse nell’array sono risolte o una qualsiasi di esse viene rifiutata.
     * Questo metodo permette di eseguire più richieste API in parallelo, riducendo il tempo totale di attesa 
     * rispetto all’esecuzione sequenziale */

    async getSingleProject(id) {
      try {
        const [repoRes, readmeRes, langRes, contribRes] = await Promise.all([
          store.octokit.request(`GET /repositories/${id}`, {
            headers: { 'X-GitHub-Api-Version': '2022-11-28' }
          }),
          store.octokit.request(`GET /repositories/${id}/contents/README.md`, {
            headers: {
              'X-GitHub-Api-Version': '2022-11-28',
              'accept': 'application/vnd.github+json'
            }
          }),
          store.octokit.request(`GET /repositories/${id}/languages`, {
            headers: { 'X-GitHub-Api-Version': '2022-11-28' }
          }),
          store.octokit.request(`GET /repositories/${id}/contributors`, {
            headers: { 'X-GitHub-Api-Version': '2022-11-28' }
          })
        ]);

        this.info = repoRes.data;
        this.info['readme_description'] = marked(decodeURIComponent(escape(atob(readmeRes.data.content))));
        this.info['only_languages'] = Object.keys(langRes.data);
        this.info['count_languages'] = Object.values(langRes.data);
        this.info['contributors'] = contribRes.data;

        this.info['image'] = [];
        /*Array.from({ length: 3 }):
          Array.from è un metodo statico che crea un nuovo array da un oggetto simile a un array o iterabile.
          { length: 3 } crea un oggetto con una proprietà length impostata a 3. 
           Questo oggetto viene utilizzato da Array.from per determinare la lunghezza dell’array risultante.
          
           (_, i) => ...:
          Il secondo argomento di Array.from è una funzione di mappatura che viene chiamata per ogni elemento dell’array creato.
          (_, i) sono i parametri della funzione di mappatura. _ rappresenta l’elemento corrente (che in questo caso non viene utilizzato),
          mentre i rappresenta l’indice dell’elemento corrente.
          
          store.octokit.request(...):
          All’interno della funzione di mappatura, viene effettuata una richiesta API utilizzando store.octokit.request.
          La richiesta è per ottenere il contenuto di un file immagine (${this.info.name}-${i}.png) dal repository specificato.
          then(res => this.info['image'].push(res.data.download_url)):
          
          Dopo che la richiesta API è stata completata, il metodo then viene chiamato per gestire la risposta.
          res è l’oggetto di risposta della richiesta API.
          
          this.info['image'].push(res.data.download_url) aggiunge l’URL di download 
          dell’immagine (res.data.download_url) all’array this.info['image'].
          
          Risultato
          Array.from crea un array di 3 elementi.
          Per ogni elemento, viene effettuata una richiesta API per ottenere un’immagine dal repository.
          Gli URL delle immagini ottenute vengono aggiunti all’array this.info['image'].
          imageRequests sarà un array di promesse, ciascuna rappresentante una richiesta API.
          
          Esempio di Esecuzione
          Supponiamo che this.info.name sia "example-repo", e id sia l’ID del repository. Il codice eseguirà le seguenti richieste API:

          GET /repositories/${id}/contents/example-repo-0.png
          GET /repositories/${id}/contents/example-repo-1.png
          GET /repositories/${id}/contents/example-repo-2.png
          Ogni richiesta aggiungerà l’URL dell’immagine corrispondente all’array this.info['image'] 
        */

        const imageRequests = Array.from({ length: 3 }, (_, i) => store.octokit.request(`GET /repositories/${id}/contents/${this.info.name}-${i}.png`, {
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
            'accept': 'application/vnd.github+json'
          }
        }).then(res => this.info['image'].push(res.data.download_url)));
        console.log(this.info)
        await Promise.all(imageRequests);
      } catch (error) {
        console.error(`Error fetching project ${id}:`, error);
      }
    }
  },

  async status(projects, arrayGood, arrayBad) {
    const statusRequests = projects.map(async (project) => {
      try {
        const res = await store.octokit.request(`GET /repos/{owner}/{repo}/contents/status`, {
          owner: project.full_name.split('/')[0],
          repo: project.name,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
            'accept': 'application/vnd.github+json'
          }
        });

        const status = atob(res.data.content);
        project['status'] = status;

        if (status === 'finish' || status === 'work in progress') {
          arrayGood.push(project);
        } else {
          arrayBad.push(project);
        }
      } catch (error) {
        console.error(`Error fetching status for project ${project.name}:`, error);
      }
    });

    await Promise.all(statusRequests);
  }
});

