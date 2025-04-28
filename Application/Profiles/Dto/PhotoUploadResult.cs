using System;

namespace Application.Profiles.Dto;

public class PhotoUploadResult
{
    public required string PublicId { get; set; }
    public required string Url { get; set; }
}
