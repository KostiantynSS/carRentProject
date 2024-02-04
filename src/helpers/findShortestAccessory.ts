
const findShortestAccessory=(array:string[]) =>{

    let short = array.reduce((a, b) => {

        return a.length < b.length ? a : b;

    });

    return short;

}
 export default findShortestAccessory