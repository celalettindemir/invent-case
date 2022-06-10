import { Layout } from '../../components'

import { useParams } from 'react-router-dom';
const Detail = () => {

    // Get the userId param from the URL.
    let { imdbId } = useParams();
    return (
        <Layout>
            <p className="App-desc">You're on <span>{imdbId}</span></p>
            <p className="App-desc">Edit <code>src/pages/Home/index.js</code> and save to reload.</p>
        </Layout>
    )
}

export default Detail