const { createContext, useState, useEffect } = require("react");

const NotificationContext = createContext({
    notification: null,
    showNotification: (notificationData) => {},
    hideNotification: () => {}
})

export const NotificationContextProvider = (props) => {
    const [activeNotification, setActiveNotification] = useState()

    useEffect(() => {
        if (activeNotification && (activeNotification.status === 'success' || activeNotification.status === 'error')) {
            const timer = setTimeout(() => {
                setActiveNotification(null)
            }, 3000)

            return () => {
                clearTimeout(timer)
            }   
        }
    }, [activeNotification])

    const showNotificationHandler = (notificationData) => {
        setActiveNotification(notificationData)
    }

    const hideNotificationHnadler = () => {
        setActiveNotification(null)
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandler,
        hideNotification: hideNotificationHnadler
    }

    return (
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
    )
}


export default NotificationContext