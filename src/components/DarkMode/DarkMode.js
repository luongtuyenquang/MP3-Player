import { connect } from 'react-redux';
import './DarkMode.scss';
import { checkedDarkMode } from '../../redux/actions';

function DarkMode({handleCheckedDarkMode, themeDark}) {

    const isChecked = () => {
        const checkbox = document.querySelector('#checkbox')
        if(checkbox.checked) {
            handleCheckedDarkMode(true)
        } else {
            handleCheckedDarkMode(false)
        }
    }

    return (
        <div className={`dark-mode ${themeDark === true ? 'dark-icon' : ''}`}>
            <input type='checkbox' id='checkbox' onClick={isChecked} />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        themeDark: state.darkModeReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleCheckedDarkMode: (checked) => {
            dispatch(checkedDarkMode(checked))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DarkMode)