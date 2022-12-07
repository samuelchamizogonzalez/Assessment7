package Bootcamp.Assessment7.Person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public PersonService(PersonRepository personRepository){
        this.personRepository = personRepository;
    }

    public ArrayList<Person> getPersons(){
        return (ArrayList<Person>) personRepository.findAll();
    }

    public void addPerson(Person person) {
        Person newPerson = new Person();
        newPerson.setFirstName(person.getFirstName());
        newPerson.setLastName(person.getLastName());
        newPerson.setUsername(person.getUsername());
        newPerson.setPassword(person.getPassword());
        personRepository.save(newPerson);
    }
}
