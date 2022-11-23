import axios from 'axios';

const get = async (Number)  => {
    const {data: user} = await axios (
        `https://jsonplaceholder.typicode.com/users/${Number}`
    );
    const {data: post} = await axios (
        `https://jsonplaceholder.typicode.com/posts?id=${Number}`
    );
    console.log("res",user);
    console.log("res1",post);
}
export default get;
