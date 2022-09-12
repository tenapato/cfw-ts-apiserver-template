export async function handleFetch(event: Event){
    try{
        return new Response(JSON.stringify({
            status: 200,
            message: 'Ok',}), {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
        })
    }catch(err){
        console.log(err);
    }
}