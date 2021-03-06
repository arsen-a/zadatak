export const PostsStore = {
    state: {
        allPosts: [
            {
                id:1,
                title: 'Post no 1',
                body: 'This is the content of the first post.',
                image: 'http://www.onlinetefltraining.com/wp-content/uploads/2013/08/2173808.jpg'
            },
            {
                id: 2,
                title: 'Post no 2',
                body: 'This is the content of the second post.',
                image: 'https://www.kurir.rs/data/images/2019/11/27/17/2067251_profimedia0424509037_ls.jpg'
            },
            {
                id: 3,
                title: 'Post no 3',
                body: 'This is the content of the third post.',
                image: 'https://static.makeuseof.com/wp-content/uploads/2018/02/post-panorama-instagram-670x335.jpg'
            }
        ],
        nextId: 4
    },
    mutations: {
        setNewPost(state, post) {
            state.allPosts.push({...post, id: state.nextId})
            state.nextId++
        },
        removePost(state, id) {
            let toDelete = state.allPosts.findIndex(post => post.id === id);
            state.allPosts.splice(toDelete, 1)
        }
    },
    actions: {
        addPost(conext, post) {
            conext.commit('setNewPost', post)
        },
        deletePost(context, postId) {
            context.commit('removePost', postId)
        }
    },
    getters: {
        allPosts(state) {
            return state.allPosts
        }
    }
}