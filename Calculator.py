# Basic Calculator 


num1=int(input("Enter number-1="))
num2=int(input("Enter number-2="))
operations =int(input("Enter the symbol number:[ 1)+ 2)- 3)* 4)/ ]--"))

if operations==1 :
	print(num1+num2)
	
elif operations==2 :
	print(num1-num2)
	
elif operations==3 :
	print(num1*num2)
	
elif operations==4 :
	print(num1/num2)
	
else:
	print("wrong choice")
		