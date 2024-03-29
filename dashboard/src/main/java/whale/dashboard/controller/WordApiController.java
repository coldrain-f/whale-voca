package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.DeleteIdListRequest;
import whale.dashboard.dto.WordDto;
import whale.dashboard.service.WordService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@Validated
public class WordApiController {

    private final WordService wordService;

    @PostMapping("/yomi/{id}/words")
    public ResponseEntity<Void> register(
            @PathVariable Long id,
            @RequestBody @Valid List<WordDto.RegistrationRequest> requests) {
        wordService.registerWords(id, requests);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/words")
    public ResponseEntity<Void> modify(
            @RequestBody @Valid List<WordDto.ModifyRequest> requests) {
        wordService.modifyWords(requests);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/words")
    public ResponseEntity<Void> remove(
            @RequestBody @Valid DeleteIdListRequest request) {
        wordService.removeWords(request.getIdList());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/yomi/{id}/words")
    public Page<WordDto.Response> getResponse(
            @PathVariable Long id,
            @PageableDefault Pageable pageable) {
        return wordService.findByYomiId(id, pageable);
    }
}
