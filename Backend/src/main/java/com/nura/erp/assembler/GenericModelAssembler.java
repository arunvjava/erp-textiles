//package com.nura.erp.assembler;
//
//
//import org.springframework.hateoas.EntityModel;
//import org.springframework.hateoas.server.RepresentationModelAssembler;
//import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
//
//import java.util.function.BiFunction;
//
//public class GenericModelAssembler<T> implements RepresentationModelAssembler<T, EntityModel<T>> {
//
//    private final Class<?> controllerClass;
//    private final BiFunction<Class<?>, T, WebMvcLinkBuilder> linkFunction;
//
//    public GenericModelAssembler(Class<?> controllerClass, BiFunction<Class<?>, T, WebMvcLinkBuilder> linkFunction) {
//        this.controllerClass = controllerClass;
//        this.linkFunction = linkFunction;
//    }
//
//    @Override
//    public EntityModel<T> toModel(T entity) {
//        return EntityModel.of(entity,
//                linkFunction.apply(controllerClass, entity).withSelfRel(),
//                WebMvcLinkBuilder.linkTo(controllerClass).withRel("all"));
//    }
//}
