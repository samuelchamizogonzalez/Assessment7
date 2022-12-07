package Bootcamp.Assessment7.Person;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
public class PersonController {
    @Autowired
    PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @GetMapping(path = "/getPersons")
    public ArrayList<Person> getPersons(){
        return personService.getPersons();
    }

    @GetMapping(path = "/getPersonById/{id}")
    public ArrayList<Person> getPersonById(@PathVariable("id") Integer id){
        ArrayList<Person> persons = personService.getPersons();
        ArrayList<Person> filteredList= new ArrayList<>();

        for(Person person : persons){
            if(person.getId().equals(id)){
                filteredList.add(person);
            }
        }
        return filteredList;
    }

    @PostMapping(path = "/addPerson", consumes = "application/json")
    public void addPerson(@RequestBody Person person) {
        personService.addPerson(person);
    }
}
