package jp.gihyo.projava.tasklist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TaskListApplication {

	public static void main(String[] args) {
		System.out.println("test");
		SpringApplication.run(TaskListApplication.class, args);
	}

}
