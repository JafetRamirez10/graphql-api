import {tasks} from './sample';
import user from './models/user';
export const resolvers ={
	Query:{
		hello:()=>{
			return "Hello world with GraphQL"
		},
		greet(root,{ name },ctx){
			//console.log(args.name);
			console.log(ctx);
			return `Hello ${name} !`;
		},
		tasks(){
			return tasks;
		},
		async Users(){
			return await user.find();
			//const users = await user.find();
			//return users;
		}



	},
	Mutation:{
		createTask(_,{ input }){
			input._id = tasks.length;
			tasks.push(input);
			return input;
		},
		async createUser(_,{ input }){
		const newUser=new user(input);
		await newUser.save();
		console.log(newUser);
		return newUser;
	},
	async deleteUser(_,{ _id }){
		return  await user.findByIdAndDelete(_id);
	},
	async updateUser(_,{_id,input}){
			return await user.findByIdAndUpdate(_id,input,{new:true});
	}
	}

}