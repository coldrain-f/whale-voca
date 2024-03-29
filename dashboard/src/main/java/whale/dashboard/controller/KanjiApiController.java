package whale.dashboard.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import whale.dashboard.dto.DeleteIdListRequest;
import whale.dashboard.dto.KanjiDto;
import whale.dashboard.service.KanjiService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@Validated
public class KanjiApiController {

    private final KanjiService kanjiService;

    @PostMapping("/categories/{id}/kanjis")
    public ResponseEntity<Void> register(
            @PathVariable Long id,
            @RequestBody @Valid List<KanjiDto.RegistrationRequest> requests) {
        kanjiService.registerKanji(id, requests);
        return ResponseEntity.ok().build();
    }

    @PatchMapping("/kanjis")
    public ResponseEntity<Void> modify(
            @RequestBody @Valid List<KanjiDto.ModifyRequest> requests) {
        kanjiService.modifyKanjis(requests);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/kanjis")
    public ResponseEntity<Void> remove(
            @RequestBody @Valid DeleteIdListRequest request) {
        kanjiService.removeKanjis(request.getIdList());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/categories/{id}/kanjis")
    public Page<KanjiDto.Response> getResponse(
            @PathVariable Long id,
            @PageableDefault Pageable pageable) {
        return kanjiService.findByCategoryId(id, pageable);
    }
}
