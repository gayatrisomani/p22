class rope{
	constructor(body1,body2, pointA, pointB)
	{

	//create rope constraint here
		this.pointA=pointA
		this.pointB=pointB

			var options = {
				bodyA:body1,
				bodyB:body2,
				pointB:{x:this.pointA, y:this.pointB}

			}
			con1 = Matter.Constraint.create({
				pointA:{x:300,y:300},
				bodyB:bob1,
				pointB:{x:0,y:0},
				length:100,
				stiffness:0.1
			  });
			  con2 = Matter.Constraint.create({
				pointA:{x:340,y:300},
				bodyB:bob2,
				pointB:{x:0,y:0},
				length:100,
				stiffness:0.1
			  });
		
			  con3 = Matter.Constraint.create({
				pointA:{x:380,y:300},
				bodyB:bob3,
				pointB:{x:0,y:0},
				length:100,
				stiffness:0.1
			  });
			  con4 = Matter.Constraint.create({
				pointA:{x:420,y:300},
				bodyB:bob4,
				pointB:{x:0,y:0},
				length:100,
				stiffness:0.1
			  });
			  con5 = Matter.Constraint.create({
				pointA:{x:460,y:300},
				bodyB:bob5,
				pointB:{x:0,y:0},
				length:100,
				stiffness:0.1
			  });
		
	}


    //create display() here 
	
}
