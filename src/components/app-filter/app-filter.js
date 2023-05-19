import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'Все сотрудники' },
        { name: 'like', label: 'На повышение' },
        { name: 'moreThen1000', label: 'З/П больше 1000$' }
    ]

    const button = buttonsData.map(({ name, label }) => {
        const active = props.filter === name
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button type="button"
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilter(name)}>
                {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {button}
        </div>
    )
}

export default AppFilter;