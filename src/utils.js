export const getImageUrl = (id, server_id,size,secret)=> {
    return `https://live.staticflickr.com/${server_id}/${id}_${secret}_${size}.jpg`
}