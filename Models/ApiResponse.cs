namespace VfxCalculator.Models
{
    public class ApiResponse<T>
    {
        public string ResponseCode { get; set; } = "99";
        public string ResponseMessage { get; set; } = string.Empty;
        public T? Result { get; set; }
    }
}