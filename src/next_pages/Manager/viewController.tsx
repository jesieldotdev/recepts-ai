import { Cog } from "styled-icons/fa-solid"
import { AddSquare, NotepadEdit, Settings, Notebook } from "styled-icons/fluentui-system-filled"

interface MenuItems {
    id: number
    title: string
    icon: JSX.Element
}

function ManagerViewController() {
    const manager_menu_items: MenuItems[] = [
        {
            title: 'Adicionar',
            icon: (<AddSquare className="icon" />)
        },
        {
            title: 'Editar',
            icon: (<NotepadEdit className="icon" />)
        },
        {
            title: 'Categorias',
            icon: (<Notebook className="icon" />)
        },
        {
            title: 'Configurações',
            icon: (<Settings className="icon" />)
        },
    ].map((item, index) => ({
        id: index
        , ...item,
    }))

    return {
        manager_menu_items
    }
}

export default ManagerViewController