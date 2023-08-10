

export const Form = ({form}) => {

  return (
    <div className="pet-card" key={form._id}>
    <h3>Patient Name: {form.petId && form.petId.name}</h3>
    <p>{form.request}</p>
</div>
  )
}
