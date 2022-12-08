import { useParams } from "react-router-dom";

export const CategoryList=()=>{

    const params = useParams();
    return <div>Category list selected {params.name}</div>
}