// import axios from 'axios'
// componentDidMount() {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//         .then(response => {
//             console.log(response)
//             this.setState({
//                 posts: response.data.slice(0,10)
//             })
//         })
//         .catch(error => console.log(error))
// };
// init state
const initState = {
    posts: [
        {id: '1', title: "Numquam quas", body: "quidem rem saepe sint tempore, ut! Culpa libero modi qui quod rem" },
        {id: '2', title: "Lorem ipsum", body: "dolor sit amet, consectetur adipisicing elit. Aspernatur atque beatae, blanditiis eos ex facere non" },
        {id: '3', title: "Aspernatur atque", body: "beatae, blanditiis eos ex facere non. Lorem ipsum dolor sit amet, consectetur adipisicing elit" }
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
           return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
};

export default rootReducer
