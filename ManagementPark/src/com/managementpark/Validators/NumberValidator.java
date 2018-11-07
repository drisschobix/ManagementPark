package com.managementpark.Validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class NumberValidator implements ConstraintValidator<IsValidNumber,Integer> {

	@Override
	public void initialize(IsValidNumber arg0) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean isValid(Integer Nbr, ConstraintValidatorContext arg1) {
		try {
		if(Nbr>0)
		{
			return true;
		}
		
		else {
			return false;
		}
		}
		catch(Exception e)
		{
			return false;
		}
		
	}
	

	
	

}
