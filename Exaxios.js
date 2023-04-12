import axios from "axios";

const listArticles = async () => {
    try { 
        const {data} = await axios.get ("https://backend-skateshop-production.up.railway.app/api/ver")
        return data
    } catch (error) {
        console.log({data: error.response.data, status: error.response.status})
    }
}

const saveArticle = async (articleToSave) => {
    try { 
        const {data} = await axios.post ("https://backend-skateshop-production.up.railway.app/api/crear",{
            articleToSave
        });
        return data
    } catch (error) {
        console.log({data: error.response.data, status: error.response.status})
    }
}