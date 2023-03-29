import { appendFileSync, readFileSync } from 'node:fs';

// saves one book object in the file named books

const savePosts = (posts) => {
    try {
        appendFileSync("posts.txt", `${posts.name}, ${posts.message}`)
    }catch (err) {
        console.log(err);
    }
}

export { savePosts }

