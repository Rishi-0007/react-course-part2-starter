import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

const usePosts = () => {
const getPosts = ()=>    axios
.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
.then((res) => res.data) 

   return useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
    })
}

export default usePosts