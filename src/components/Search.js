import React from 'react'

function Filter(props){
    const searchValue = props.data.searchValue;
    return props.data.musicCollection.filter(function(el) {
        const { title, album, artist, genre } = el
        return el[{title}].toLowerCase().includes(searchValue.toLowerCase()) ||
        el[{album}].toLowerCase().includes(searchValue.toLowerCase()) ||
        el[{artist}].toLowerCase().includes(searchValue.toLowerCase()) ||
        el[{genre}].toLowerCase().includes(searchValue.toLowerCase());
    }
)}

export default Filter