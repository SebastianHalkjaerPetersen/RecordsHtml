import axios,{
    AxiosResponse,
    AxiosError
}from"../../node_modules/axios/index";

interface IRecord{
    id: number,
    Title: string,
    Artist: string,
    Duration: number,
    YearOfPublication: string,
}
let baseUrl: string = "recordrest.azurewebsites.net/api/records"
new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        records: [],
        name: "",
        greeting: ""
    },
    methods: {
        GetAllRecords(){
            this.helperGetAndShow()
        },
        helperGetAndShow(url: string){
            axios.get<IRecord[]>(url)
            .then((response: AxiosResponse<IRecord[]>)=> {this.records = response.data}).catch((error: AxiosError) => {alert(error.message)});
        }  ,
    }
})