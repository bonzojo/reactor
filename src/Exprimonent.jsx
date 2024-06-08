export default function MyExprimonent(props){
    const { experiment, description } = props;
    return (
        <>
            <h2>{experiment}</h2>
            <p>{description}</p>
        </>
    );
};