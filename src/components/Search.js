import React from 'react'

function Filter(props){
    return props.data.musicCollection.filter(function(el) {
        return el["title"].toLowerCase().includes(props.data.searchValue.toLowerCase()) ||
        el["album"].toLowerCase().includes(props.data.searchValue.toLowerCase()) ||
        el["artist"].toLowerCase().includes(props.data.searchValue.toLowerCase()) ||
        el["genre"].toLowerCase().includes(props.data.searchValue.toLowerCase());
    }
)}

export default Filter