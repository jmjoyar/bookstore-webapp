package com.sc.backend.domain;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.Year;
import java.util.HashSet;
import java.util.Set;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@NoArgsConstructor
@Entity
public class Book {
    @Id
    @NonNull
    @Column(nullable = false, unique = true, length = 13)
    @NotBlank(message = "ISBN cannot be empty")
    private String isbn;

    @OneToMany(mappedBy = "book", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<OrderDetail> orderDetails = new HashSet<>();

    @NonNull
    @Column(nullable = false)
    @NotBlank(message = "Book must have a title")
    private String title;

    private Year publicationDate;

    private int edition;

    @Column(nullable = false)
    private int availableQuantity;

    @NonNull
    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false)
    private short discount;

    @NonNull
    @Column(nullable = false)
    private BigDecimal finalPrice;

    @JsonIgnore
    @CreationTimestamp
    private LocalDateTime createdAt;

    @JsonIgnore
    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @ManyToMany(mappedBy = "books")
    private Set<Author> authors = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "book_publisher", joinColumns = @JoinColumn(name = "book_id"), inverseJoinColumns = @JoinColumn(name = "publiser_id"))
    private Set<Publisher> publishers = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "book_genre", joinColumns = @JoinColumn(name = "book_id"), inverseJoinColumns = @JoinColumn(name = "genre_id"))
    private Set<Genre> genres = new HashSet<>();

    @OneToMany(mappedBy = "book")
    private Set<Review> reviews = new HashSet<>();
}
