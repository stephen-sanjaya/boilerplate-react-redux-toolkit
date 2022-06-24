import Helmet from  'react-helmet';

const styles = {
        textAlign : 'center',
        fontSize : '2rem',
        margin: '4 rem 0'
}

export default NoMatch = () =>{
    <div>
        <Helmet>
            <title>Page Not Found :404</title>
            <meta name='description' content='404 page lost in space' />
        </Helmet>
        <div>
            <h1 style={styles}>Page Not Found</h1>
        </div>
    </div>
}
