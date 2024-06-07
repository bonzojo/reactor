import image from './assets/R.png';
function Profile(){
    return (
        <div>
        <img src={image} alt="Rat Monkey"/>
        {console.log('The profile is connected!')}
        </div>
    );
}
export default Profile