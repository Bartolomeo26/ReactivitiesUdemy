using System;
using Application.Activities.Commands;
using Application.Activities.Dto;
using FluentValidation;

namespace Application.Activities.Validators;

public class CreateActivityValidator
    : BaseActivityValidator<CreateActivity.Command, CreateActivityDto>
{
    public CreateActivityValidator() : base(x => x.ActivityDto)
    {

    }
}
