namespace CollageStudentsUdea.Models
{
    public static class CollegeRepository
    {

        public static List<Student> Students { get; set; } = new List<Student> {
            new Student
            {
                Id = 1,
                StudentName = "Isabella",
                Email = "urregos358@gmail.com",
                Address = "CL 103C #74A-14"
            },
            new Student
            {
                Id = 2,
                StudentName = "Sebastian",
                Email = "surregograciano@gmail.com",
                Address = "CL 103C #74A"
            }};

    }
}
