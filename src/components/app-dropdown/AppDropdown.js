import './app-dropdown.css'

function AppDropdown({value, items}) {
    return (
        <div className={["app-dropdown", value ? 'app-dropdown--open' : ''].join(' ')}>
            <div className="app-dropdown__content">
                {items.map((item, i) => <div className="app-dropdown__item" key={i}>{item}</div>)}
            </div>
        </div>
    )
}

export default AppDropdown