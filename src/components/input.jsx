export default function Input({ type, id, onChange, placeholder, name, required }) {
     // Render radio button with label
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
    // Render regular input with label
    return (
        <div className="inputs">
        <label htmlFor={id}>{placeholder}</label>
        <input type={type} id={id} onChange={onChange} placeholder={placeholder} required={required}/>
        </div>
    )
}
}
