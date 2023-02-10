export const initialState ={
    user : null,
    playlists :[],
    playing:false,
    discover_weekly:null,
    spotify:null,
    item:null,
    token:""
    //token:" BQCRr4n5qQD5jGpLMF-AoYiw6aN2x1mzEnf6X7oD4iGfmhVJp0n-NJxfdkmtkJarcbFJdaeIi0ENvE1bedN7h3E85KWi0d47Wnbg035aui435FrzPjVFerlvok1c5dYFFJEQTNpeaXF1XCMdfY9Yhkq39KKcCEaxfypcLGn8QqdROIaNPlmaOscLW_982rQ4LBaQn7dmy3kNiJxhrWHOkQ",
};


const reducer = (state,action)=> {
    //console.log(action);

    //action -> type,[payload]

    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user,
            };

        case "SET_TOKEN":
            return{
                ...state,
                token:action.token,
            };

        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists:action.playlists,
            };

        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly:action.discover_weekly,
            };    
        default:
            return state;    

    }
};

export default reducer;