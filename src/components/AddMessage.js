import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = props => {
    let input;

    return(
        <section id="new-message">
            <input id="input-message" onKeyPress={(e)=>{
                if(e.key==='Enter'){
                    props.dispatch(input.value, 'Me')
                    input.value=''
                }
            }}
            type="text"
            placeholder="Enter your message here.."
            ref={( node ) => {
                input=node
            }}>            
            </input>
        </section>
    );
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired,
}

export default AddMessage;