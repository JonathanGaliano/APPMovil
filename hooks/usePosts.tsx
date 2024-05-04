import { useEffect, useState } from "react";

interface Post {
    id: string;
    profilePicture: string;
    name: string;
    profileName: string;
    Description: string;
}

export const usePosts = () => {

    const [data, setData] = useState<Array<Post>>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPosts = async () => {
        const response = await fetch("http://192.168.104.137:3001/");
        const data: Array<Post> = await response.json();

        setData(data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    return { data, isLoading };
};