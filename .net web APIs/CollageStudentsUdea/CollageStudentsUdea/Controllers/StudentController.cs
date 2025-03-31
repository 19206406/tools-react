using CollageStudentsUdea.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CollageStudentsUdea.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {

        [HttpGet]
        [Route("All", Name = "GetAllStudents")] 
        public ActionResult<IEnumerable<Student>> GetStudents()
        {
            // Ok - 200 - Succes 
            return Ok(CollegeRepository.Students); 
        }


        [HttpGet]
        [Route("{id:int}", Name = "GetStudentById")]
        public ActionResult<Student> GetStudentsById(int id)
        {
            if (id <= 0)
            {
                return BadRequest(); // es una respuesta que esta mal por que no Id menores o iguales que 0 
            }


            return (CollegeRepository.Students.Where(n => n.Id == id).FirstOrDefault());
        }


        [HttpGet("{name:alpha}", Name = "GetStudentName")] // podemos utilizar esta otra manera de definir la ruta 
        public ActionResult<Student> GetStudentByName(string name)
        {
            return Ok(CollegeRepository.Students.Where(n => n.StudentName == name).FirstOrDefault());
        }


        [HttpDelete("{id:int:min(0):max(100)}", Name = "DeleteStudentById")] // podemos utilizar una restrinción de rango para los datos
        public bool DeleteStudent(int id)
        {
            var student = CollegeRepository.Students.Where(n => n.Id == id).FirstOrDefault();
            CollegeRepository.Students.Remove(student);

            return true; 
        }

    }
}
