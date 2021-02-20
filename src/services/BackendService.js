import axios from 'axios';

export async function getHost(){
    const response=await axios.get(`./config.json`);
    const config=await response.json();
    return config["host"]
}

export async function getList(host){
    const url=`${host}/list`;
    const response=await axios.get(url);
    return await response.json();
}

export async function getListByNext(host, next){
    const url=`${host}/list`;
    const postData = {
        next:next
    };
    const response=await axios.post(url,postData);
    return await response.json();
}

export async function getListByPath(host, path){
    const url=`${host}/list?path=${path}`;
    const response=await axios.get(url);
    return await response.json();
}

export async function verify(host,code){
    const response=await axios.get(`${host}/verify?code=${code}`);
    return await response.json();
}

export async function getStatus(host){
    const response=await axios.get(`${host}/`);
    let result={};
    if(response.status!==200){
        result["status"]["backend_available"]=false;
    }else{
        let data_json=await response.json();
        result["status"]["backend_available"]=true;
        if(data_json.hasOwnProperty("oss_available")){
            result["status"]["oss_available"]=data_json["oss_available"];
        }
        result["status"]["oneDrive_logged"]=data_json["oneDrive_logged"];
        if(result["status"]["oneDrive_logged"]) {
            result["accounts"] = data_json["accounts"];
        }
    }
    return result;
}
