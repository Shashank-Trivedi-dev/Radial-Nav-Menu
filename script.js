"use strict";
const MenuOption = (props) => {
    const { toggled } = React.useContext(AppContext);
    const className = `menu-${props.type}-option`, delay = toggled ? 200 : 0;
    const styles = {
        transitionDelay: `${delay + (50 * props.index)}ms`
    };
    return (React.createElement("a", { href: props.url, target: "_blank", className: className, disabled: !toggled, style: styles },
        React.createElement("i", { className: props.icon }),
        React.createElement("h3", { className: props.type === "quick" ? "tooltip" : "label" }, props.label)));
};
const Menu = () => {
    const { toggled } = React.useContext(AppContext);
    const profileImage = "https://shashanktrivedi.com/wp-content/uploads/2023/09/photo-1614027164847.png";
    const getOptions = (options, type) => {
        return options.map((option, index) => (React.createElement(MenuOption, { key: option.label, icon: option.icon, index: index, label: option.label, url: option.url, type: type })));
    };
    const getQuickOptions = () => {
        return getOptions([{
                icon: "fa-solid fa-bell", label: "Notifications", url: "https://shashanktrivedi.com/"
            }, {
                icon: "fa-solid fa-gear", label: "Settings", url: "https://shashanktrivedi.com/"
            }, {
                icon: "fa-solid fa-moon", label: "Theme", url: "https://shashanktrivedi.com/"
            }], "quick");
    };
    const getFullOptions = () => {
        return getOptions([{
                icon: "fa-solid fa-house", label: "Home", url: "https://shashanktrivedi.com/"
            }, {
                icon: "fa-solid fa-user", label: "Profile", url: "https://shashanktrivedi.com/"
            }, {
                icon: "fa-solid fa-chart-line", label: "Dashboard", url: "https://shashanktrivedi.com/"
            }, {
                icon: "fa-solid fa-heart", label: "Subscriptions", url: "https://shashanktrivedi.com/"
            }, {
                icon: "fa-solid fa-wallet", label: "Wallet", url: "https://shashanktrivedi.com/"
            }], "full");
    };
    return (React.createElement("div", { id: "menu", className: classNames({ toggled }) },
        React.createElement("div", { id: "menu-background-wrapper" },
            React.createElement("div", { id: "menu-background" })),
        React.createElement("img", { id: "menu-profile-image", src: profileImage }),
        React.createElement("div", { id: "menu-quick-options" }, getQuickOptions()),
        React.createElement("div", { id: "menu-full-options" }, getFullOptions())));
};
const AppContext = React.createContext(null);
const App = () => {
    const [toggled, setToggledTo] = React.useState(false);
    React.useEffect(() => {
        setTimeout(() => setToggledTo(true), 1000);
    }, []);
    const handleOnClick = () => setToggledTo(!toggled);
    return (React.createElement(AppContext.Provider, { value: { toggled } },
        React.createElement("div", { id: "app" },
            React.createElement(Menu, null),
            React.createElement("button", { id: "menu-toggle", type: "button", onClick: handleOnClick },
                React.createElement("i", { className: toggled ? "fa-solid fa-xmark-large" : "fa-solid fa-bars-staggered" })))));
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));