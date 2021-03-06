/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User } from './users.model'

@Injectable()
export class UserService {
    users: User[] = []

    insertUser(firstName: string, lastName: string, age: number, email: string): { user: User } {
        const uid = Math.floor(Math.random() * 100000000 + 100).toString()
        const newUser: User = new User(uid, firstName, lastName, age, email)
        this.users.push(newUser)

        return {
            user : this.users[this.users.length - 1]
        }
    }
    getUsers(id ?: string) {
        if (id) {
            const user = this.users.find(eachUser => ( eachUser.id === id ))
            return { user }
        }
        return {
            users: [...this.users]
        }
    }
    updateUser(id: string, firstName: string, lastName: string, age: number, email: string) {
        const index = [...this.users].findIndex(user => user.id === id)
        this.users[index] = {
            id,
            firstName,
            lastName,
            age,
            email
        }
        return {
            user: this.users[index]
        }
    }
    deleteUser(id ?: string) {
        if (id) {
            const user = this.users.find(eachUser => ( eachUser.id === id ))
            return { user }
        }
        return {
            users: [...this.users]
        }
    }
}
