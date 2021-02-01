import loadingImg from '../loading.gif'

const Loading = () => {
    return (
        <div className="loading">
            <img src={loadingImg} alt="loading.." />
        </div>
    );
}

export default Loading;