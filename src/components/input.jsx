export default function Input({ type, id, onChange, placeholder, name }) {
     if (type === 'radio') {
    return (
      <label>
        <input
          type="radio"
          id={id}
          onChange={onChange}
          name={name}
        />
        {placeholder}
      </label>
    );
  }else{
    return (
        <>
        <label htmlFor={id}>{placeholder}</label>
        <input type={type} id={id} onChange={onChange} placeholder={placeholder}/>
        </>
    )
}
}