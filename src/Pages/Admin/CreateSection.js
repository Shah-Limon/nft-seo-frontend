import { useNavigate } from 'react-router-dom';

const CreateSection = () => {
    const navigate = useNavigate();

    const handleCreateSection = (event) => {
        event.preventDefault();
        const SectionName = event.target.SectionName.value;
    
        const section = {
            SectionName
        };
    
        const url = `http://localhost:5000/create-section`;
        fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(section),
        })
          .then((res) => res.json())
          .then((result) => {
            navigate("/admin/dashboard");
          });
      };


    return (
        <div>
            <form onSubmit={handleCreateSection}>
                <input type='text' name='SectionName' placeholder='Enter The Section Name'></input>
                <input type='submit' value='Create Section'></input>
            </form>
        </div>
    );
};

export default CreateSection;