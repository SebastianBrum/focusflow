// Reusable button component
export default function Button({ onClick, children, id }) {
    return (
        <button onClick={onClick} id={id}>
            {children}
        </button>
    );
}