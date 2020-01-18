import mongoose from 'mongoose'

export async function connect(){
	try{
		await mongoose.connect('mongodb://localhost/mongodbgraphql',{
		useUnifiedTopology:true,useNewUrlParser:true
	})
		console.log('>>>DB is connected');

	}
	catch(e){
		console.log('>>>DB is error');
	}

}


